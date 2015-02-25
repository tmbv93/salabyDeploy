class CreateDepartmentMembers < ActiveRecord::Migration
  def change
    create_table :department_members do |t|

      t.timestamps
    end
  end
end
