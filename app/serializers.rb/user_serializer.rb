class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :phone_number
    has_many :orders
    has_many :cameras, through: :orders
end