class Camera < ApplicationController
    has_many :customers, through: :orders
    belongs_to :brands
end