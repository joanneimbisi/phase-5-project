class OrdersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    skip_before_action :authorized, only: [:index, :show, :create, :update, :destroy]

    def index
        orders = Order.where(user_id: current_user.id)
        render json: orders
    end

    def show
        order = Order.find(params[:id])
        render json: order, include: :order
    end

    def create
        params[:camera_ids].map do |c| 
            Order.create!(order_params.merge(camera_id: c, user_id: 1))
        end
        render json: {}, status: :created
    end

    def update 
        order = Order.find_by(id: params[:id])
            if true
                # order.user_id == session[:user_id] 
            order.update(order_params)
            render json: order, status: :accepted
        else
            render json: {error: "order not found"}, status: :not_found
        end
    end

    def destroy
        order = Order.find_by(id:params[:id])
        if order
            order.destroy
            render json: {}
        else 
            render json: {error: "order not found"}, status: :not_found
        end 
    end

    private

    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    
    def order_params
        params.require(:order).permit(:first_name, :last_name, :address)
    end
end