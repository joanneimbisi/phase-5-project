class BrandsController < ApplicationController
skip_before_action :authorized, only: [:index, :show]

def index
    brands = Brand.all
    render json: brands, status: :ok
end

def show 
    brands = Brand.find_by(params[:id])
    render json: brands, status: :ok
end

private
    
def render_not_found_response
    render json: { error: "Coffee not found" }, status: :not_found
end

end