class CamerasController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
skip_before_action :authorized, only: [:index, :show]

def index
    cameras = Camera.all
    render json: cameras, status: :ok
end

def show
    camera = Camera.find_by(params[:id])
    render json: camera, status: :ok
end

private
def render_not_found_response
    render json: { error: "Camera not found" }, status: :not_found
end

end