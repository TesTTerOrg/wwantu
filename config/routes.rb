Rails.application.routes.draw do
  root to: 'films#index'
  devise_for :users
  
  get '/search' => 'films#search'
end
