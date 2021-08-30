class MoviesController < ApplicationController

  def index
    @movies = Movie.where(favorite: true)
  end

  def update
    @movie = Movie.find(params[:id])
    if @movie.favorite
      @movie.update(favorite: false)
    else
      @movie.update(favorite: true)
    end
    redirect_to root_path
  end
end
