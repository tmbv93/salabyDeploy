Rails.application.routes.draw do
  root                'static_pages#home'
  get    'help'    => 'static_pages#help'
  get    'about'   => 'static_pages#about'
  get    'contact' => 'static_pages#contact'
  get    'signup'  => 'users#new'
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  get 'logout' => 'sessions#destroy'


  resources :department_members

  resources :favorites

  resources :games

  resources :departments

  resources :schools

  resources :users
  end

