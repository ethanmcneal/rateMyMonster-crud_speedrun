class RatingsController < ApplicationController
    before_action :set_rating, only: [:update, :destroy]

    def create
        @rating = Rating.new(rating_params)
    
        if @rating.save
          render json: @rating, status: :created, location: @rating
        else
          render json: @rating.errors, status: :unprocessable_entity
        end
    end

    def update
        if @rating.update(rating_params)
          render json: @rating
        else
          render json: @rating.errors, status: :unprocessable_entity
        end
    end 

    def destroy
        @rating.destroy
    end

    private 

    def set_monster
        @rating = Rating.find(params[:id])
    end

    def rating_params
        params.require(:rating).permit(:rating, :comment, :user_id, :monster_id)
    end
end
