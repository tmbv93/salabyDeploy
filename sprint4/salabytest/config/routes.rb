Rails.application.routes.draw do
  namespace :static_pages do
  get 'info/bestilling'
  end

  namespace :static_pages do
  get 'info/informasjon'
  end

  namespace :static_pages do
  get 'info/kompetanse'
  end

  namespace :static_pages do
  get 'info/omByparken'
  end

  namespace :static_pages do
  get 'info/omKanalS'
  end

  namespace :static_pages do
  get 'info/omSalaby'
  end

  namespace :static_pages do
  get 'info/omSkoleveien'
  end

  namespace :static_pages do
  get 'info/forside'
  end

  get 'cont/home'

  root                'static_pages#index'
  get    'help'    => 'static_pages#help'
  get    'info_pages/order' => 'static_pages#order'
  get    'signup'  => 'users#new'
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  get    'logout' => 'sessions#destroy'

  namespace :static_pages do
    resources :info
  end

  resources :department_members

  resources :favorites

  resources :games

  resources :departments

  resources :schools

  resources :users
  end


