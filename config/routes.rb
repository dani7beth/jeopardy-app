Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :categories do
      resources :cards
    end
    get "new_game", to: "categories#new_game"
    post "create_category_with_cards", to: "categories#create_category_with_cards"
    post "create_card", to: "categories#create_card"
  end
  get '*other', to: 'static#index'
  
end
