module DepartmentsHelper

  def set_member(department, member)
    DepartmentMember.create(department: department, member: member)
  end
end
