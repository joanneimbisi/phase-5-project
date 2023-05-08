Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  resources :users, only: [:index, :create]
  
  resources :cameras, only: [:index, :show] do
    resources :orders, only: [:index, :show]
  end
  resources :reviews, only: [:index, :show, :create, :update, :destroy]

  post "/login", to: "sessions#create"

  delete "/users/:id", to: 'sessions#destroy'
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
