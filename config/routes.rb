Rails.application.routes.draw do
  root to: 'films#index'
  devise_for :users
  
  get '/search', to: 'films#search'
  get '/my_favs', to: 'films#fav_films', as: "my_favs"

  post '/:imdb/fav', to: "films#create_fav", as: "fav"
  post '/:imdb/unfav', to: "films#destroy_fav", as: "unfav"

end
