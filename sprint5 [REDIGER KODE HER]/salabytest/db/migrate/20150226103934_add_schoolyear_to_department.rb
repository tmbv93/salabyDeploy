class AddSchoolyearToDepartment < ActiveRecord::Migration
  def change
    add_column :departments, :schoolyear, :integer
  end
end
