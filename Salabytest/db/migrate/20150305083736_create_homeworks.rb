class CreateHomeworks < ActiveRecord::Migration
  def change
    create_table :homeworks do |t|
      t.string :title
      t.text :description
      t.references :class, index: true
      t.references :game, index: true

      t.timestamps
    end
  end
end
