class AddExpirationDateToHomework < ActiveRecord::Migration
  def change
    add_column :homeworks, :expiration, :date
  end
end
