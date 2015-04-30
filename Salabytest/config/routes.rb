Rails.application.routes.draw do
  namespace :static_pages do
  namespace :barn do
    get 'norsk/eksempeltema1'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'norsk/eksempeltema2'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'engelsk/eksempeltema1'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'engelsk/eksempeltema2'
    end
  end

  get 'static_pages/admin'
  get 'static_pages/info/forside'

  resources :homeworks

  namespace :static_pages do
  namespace :barn do
    get 'rle/islam'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'rle/jodedom'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'rle/hinduisme'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'rle/buddhisme'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'rle/kristendom'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'rle/sikhisme'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'rle/etikk_filosofi'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'rle/kunst'
    end
  end

  namespace :static_pages do
  namespace :barn do
    get 'rle/kirkehistorie'
    end
  end

  namespace :static_pages do
  get 'barn/forside'
  end

  namespace :static_pages do
  get 'barn/hinduisme'
  end

  namespace :static_pages do
    get 'barn/islam'
  end

  namespace :static_pages do
  get 'barn/rle'
  end

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


