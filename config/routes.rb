Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create, :update] do 
      resources :boards, only: [:index, :show, :create, :update, :destroy]
    end
    resources :pins, only: [:index, :show, :create, :update, :destroy]
    resources :board_pins, only: [:index, :create, :destroy]
  end
  
  root to: 'static_pages#root'
end
