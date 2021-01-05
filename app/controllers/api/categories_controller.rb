class Api::CategoriesController < ApplicationController

  def index
    render json: Category.all
  end

  def create 
    category = Category.new(category_params)
    if categroy.save
      render json: category
    else
      render json: {errors: category.errors}, status: 422
    end
  end

  private 
  def category_params
    params.require(:category).permit(:name)
  end

end
