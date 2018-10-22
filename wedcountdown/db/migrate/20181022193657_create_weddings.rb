class CreateWeddings < ActiveRecord::Migration[5.0]
  def change
    create_table :weddings do |t|

      t.timestamps
    end
  end
end
