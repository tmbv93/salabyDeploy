class AddDepartmentRefToDepartmentMembers < ActiveRecord::Migration
  def change
    add_reference :department_members, :department, index: true
  end
end
