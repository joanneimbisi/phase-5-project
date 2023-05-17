class User < ApplicationController
    has_many :orders
    has_many :cameras
end