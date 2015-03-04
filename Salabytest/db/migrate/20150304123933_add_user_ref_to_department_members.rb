class AddUserRefToDepartmentMembers < ActiveRecord::Migration
  def change
    add_reference :department_members, :user, index: true
  end
end
