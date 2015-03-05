module DepartmentsHelper

  def get_members

    members = Department.joins(:users)

  end

end
