class RemoveOrderIdtoOrders < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :order_id, :string
  end
end
