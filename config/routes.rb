Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  patch 'movie/:id', to: 'movies#update', as: :movie
  get "/favorites", to: "movies#index", as: :favorites
end
