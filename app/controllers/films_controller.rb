class FilmsController < ApplicationController
  def index
  end
  
  def search
    films = find_film(params[:title])
    
    unless films
      flash[:alert] = "Film not found"
      return render action: :index
    end
    
    @film_list = films
  end
  
  private
  def request_api(url)
    response = Excon.get(url)
    
    if response.status != 200
      return nil
    end
    
    JSON.parse(response.body)
  end
  
  def find_film(title)
    request_api("http://www.omdbapi.com/?apikey=#{ENV["OMDB_API_KEY"]}&s=#{URI.encode_www_form_component(title)}")
  end
end
