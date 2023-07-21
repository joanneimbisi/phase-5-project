class Order < ApplicationRecord
    belongs_to :user, optional: true  
      belongs_to :camera

      validates :first_name, :last_name, presence:true

      def username
        user.username
      end
end