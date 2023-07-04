class User < ApplicationRecord
    has_many :orders
    has_many :cameras, through: :orders

    validates :username, uniqueness: true, presence: true 
    has_secure_password 
    
end