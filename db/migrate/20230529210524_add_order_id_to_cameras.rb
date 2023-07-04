class AddOrderIdToCameras < ActiveRecord::Migration[6.1]
  def change
    add_column :cameras, :order_id, :integer
  end
end
