class PagesController < ApplicationController
  def home
    if params[:query].present?
      @movies = Movie.where(favorite: false)
      @movies.destroy_all
      @data = JSON.parse(fetch_movies(params[:query]))
      if(@data["Response"] != "False")
        @data["Search"].each do |m|
        @movie = Movie.new(title: m["Title"], year: m["Year"], poster: m["Poster"], tipo: m["Type"])
        @movie.save
        end
      end
    end
    @movies = Movie.all.order(favorite: :desc)
  end

  def fetch_movies(title)
    RestClient.get "http://www.omdbapi.com/?s=#{title}&apikey=#{ENV["OMDB_APIKEY"]}"
  end
end
