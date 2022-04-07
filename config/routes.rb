Rails.application.routes.draw do
  devise_for :users

  root to: 'films#index'

  get '/search', to: 'films#search', as: "search"
  get '/my_favs', to: 'films#fav_films', as: "my_favs"

  post '/:imdb/fav', to: "films#create_fav", as: "fav"
  post '/:imdb/unfav', to: "films#destroy_fav", as: "unfav"

end
