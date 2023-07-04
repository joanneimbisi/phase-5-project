class OrderSerializer < ActiveModel::Serializer
    attributes :id, :shipping_address, :first_name, :last_name

    belongs_to :camera
end