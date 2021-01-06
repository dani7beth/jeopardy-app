class Api::CardsController < ApplicationController
  before_action :set_category
  before_action :set_card, only: [:destroy, :update]

  def index
    render json: @category.cards
  end

  def show
  end

  def create 
  end

  def update
  end

  def destroy
  end

  private

  def set_category
    @category = Category.find(params[:category_id])
  end 

  def set_card
    @card = @category.cards.find(params[:id])
  end
end
