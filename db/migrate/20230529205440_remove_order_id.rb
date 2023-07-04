class RemoveOrderId < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :order_id, :integer
  end
end
