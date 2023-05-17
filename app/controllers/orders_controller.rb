class OrdersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    skip_before_action :authorized, only: [:index, :show, :destroy]

    def show
        order = Order.find(params[:id])
        render json: order, include: :order
    end

    def create
        order = Order.create!(review_params.merge(user_id: current_user.id))  
        render json: order, status: :created
    end

    def update 
        order = Order.find_by(id: params[:id])
            if order.user_id == session[:user_id] 
            order.update(order_params)
            render json: order, status: :accepted
        else
            render json: {error: "order not found"}, status: :not_found
        end
    end

    def destroy
        order = Review.find_by(id:params[:id])
        if order
            order.destroy
            head :no_content
        else 
            render json: {error: "order not found"}, status: :not_found
        end 
    end

    private

    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    def review_params
        params.require(:order).permit(:title, :description, :coffee_id)
    end
end