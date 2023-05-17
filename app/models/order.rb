class Order < ApplicationController
    belongs_to :customer
    belongs_to :camera
end