class Camera < ApplicationRecord
    has_many :orders
    has_many :users, through: :orders
    belongs_to :brand
end