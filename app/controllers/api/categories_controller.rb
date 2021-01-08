class Api::CategoriesController < ApplicationController

  def index
    render json: Category.all
  end

  def new_game
    categories = Category.limit(4).order('Random()')
    
    render json: categories.to_json(include: [:cards])
  end

  def create_category_with_cards
    new_category = Category.create(name: params[:name])

    if params[:q1]
      new_category.cards.create(question: params[:q1], answer: params[:q1_answer], points: params[:q1_points], questiontype: params[:q1_type], dummyanswers: params[:q1_dummyanswers])
    end

    if params[:q2]
      new_category.cards.create(question: params[:q2], answer: params[:q2_answer], points: params[:q2_points], questiontype: params[:q2_type], dummyanswers: params[:q2_dummyanswers])
    end

    if params[:q3]
      new_category.cards.create(question: params[:q3], answer: params[:q3_answer], points: params[:q3_points], questiontype: params[:q3_type], dummyanswers: params[:q3_dummyanswers])
    end

    if params[:q4]
      new_category.cards.create(question: params[:q4], answer: params[:q4_answer], points: params[:q4_points], questiontype: params[:q4_type], dummyanswers: params[:q4_dummyanswers])
    end

    render json: new_category.to_json(include: [:cards])
  end

  def create_card 
    category = Category.find(params[:id])

    category.cards.create(question: params[:question], answer: params[:answer], answers: params[:answers], points: params[:points], questiontype: params[:questiontype], dummyanswers: params[:dummyanswers])
  end
end
