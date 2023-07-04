class AddIdsToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :order_id, :integer
    add_column :orders, :customer_id, :integer
    add_column :orders, :camera_id, :integer
  end
end
