Rails.application.routes.draw do
  get 'login', to: 'login#signup'
  get 'login/forgotpass'
  root 'home#index'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
