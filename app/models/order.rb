class Order < ApplicationRecord
    belongs_to :user, optional: true  
      belongs_to :camera


      def username
        user.username
      end
end