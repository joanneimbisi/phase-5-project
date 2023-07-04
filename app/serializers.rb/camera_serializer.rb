class CameraSerializer < ActiveModel::Serializer
    attributes :camera_name, :brand_id, :price, :image_url, :id
    has_many :orders
    has_many :users, through: :orders
  end
  