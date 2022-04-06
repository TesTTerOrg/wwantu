class FilmsController < ApplicationController
  before_action :authenticate_user!, only: [:create_fav, :destroy_fav, :fav_films]
  before_action :find_fav, only: [:destroy_fav]

  def index
  end
  
  def search
    films = search_film_by_title(params[:title])
    
    if films.nil?
      redirect_to root_path
    end
    
    @film_list = films
  end

  def fav_films
    user_imdb_array = current_user.favs.pluck(:imdb_id)
    @fav_films = search_film_by_imdb(user_imdb_array)
  end

  def create_fav
    if already_fav?
      flash[:notice] = "You can't like more than once"
    else
      current_user.favs.create(user_id: current_user.id, imdb_id: params[:imdb])
    end

    redirect_back(fallback_location: root_path)
  end

  def destroy_fav
    if not already_fav?
      flash[:notice] = "Cannot unlike"
    else
      @fav.destroy
    end

    redirect_back(fallback_location: root_path)
  end
  
  
  private
    def request_api(url)
      response = Excon.get(url)
      parsed_response = JSON.parse(response.body)
      
      if parsed_response['Response'] != 'True'
        return nil
      else
        parsed_response
      end
      
    end
    
    def search_film_by_title(title)
      request_api("http://www.omdbapi.com/?apikey=#{ENV["OMDB_API_KEY"]}&s=#{URI.encode_www_form_component(title)}&type=movie")
    end

    def search_film_by_imdb(imdb)
      l = []
      if imdb.count > 0
        imdb.each do |f|
          l.append(request_api("http://www.omdbapi.com/?apikey=#{ENV["OMDB_API_KEY"]}&i=#{f}"))
        end

        return l
      end
    end

    def already_fav?
      Fav.where(user_id: current_user.id, imdb_id: params[:imdb]).exists?
    end

    def find_fav
      @fav = current_user.favs.find_by_imdb_id(params[:imdb])
    end
end
