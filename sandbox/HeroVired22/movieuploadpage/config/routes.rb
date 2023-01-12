Rails.application.routes.draw do
  resources :movietabs
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "home#index"
  resources :users do
  end
    resources :movies do
    end
     resources :reviews do
     end
end
