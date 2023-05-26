class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :order_id
      t.string :customer_id
      t.string :camera_id
      t.string :shipping_address
      
      t.timestamps
    end
  end
end
