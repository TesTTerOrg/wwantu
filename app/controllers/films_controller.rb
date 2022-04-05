class FilmsController < ApplicationController
  def index
  end
  
  def search
    films = find_film(params[:title])
    
    unless films
      return render action: :index
    end
    
    @film_list = films
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
  
  def find_film(title)
    request_api("http://www.omdbapi.com/?apikey=#{ENV["OMDB_API_KEY"]}&s=#{URI.encode_www_form_component(title)}")
  end
end
