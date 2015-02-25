class DepartmentMembersController < ApplicationController
  before_action :set_department_member, only: [:show, :edit, :update, :destroy]

  # GET /department_members
  # GET /department_members.json
  def index
    @department_members = DepartmentMember.all
  end

  # GET /department_members/1
  # GET /department_members/1.json
  def show
  end

  # GET /department_members/new
  def new
    @department_member = DepartmentMember.new
  end

  # GET /department_members/1/edit
  def edit
  end

  # POST /department_members
  # POST /department_members.json
  def create
    @department_member = DepartmentMember.new(department_member_params)

    respond_to do |format|
      if @department_member.save
        format.html { redirect_to @department_member, notice: 'Department member was successfully created.' }
        format.json { render :show, status: :created, location: @department_member }
      else
        format.html { render :new }
        format.json { render json: @department_member.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /department_members/1
  # PATCH/PUT /department_members/1.json
  def update
    respond_to do |format|
      if @department_member.update(department_member_params)
        format.html { redirect_to @department_member, notice: 'Department member was successfully updated.' }
        format.json { render :show, status: :ok, location: @department_member }
      else
        format.html { render :edit }
        format.json { render json: @department_member.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /department_members/1
  # DELETE /department_members/1.json
  def destroy
    @department_member.destroy
    respond_to do |format|
      format.html { redirect_to department_members_url, notice: 'Department member was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_department_member
      @department_member = DepartmentMember.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def department_member_params
      params[:department_member]
    end
end
