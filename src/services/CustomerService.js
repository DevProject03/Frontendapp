import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class CustmomerService {
  saveCustomer(customer) {
    return axios.post(EMPLOYEE_API_BASE_URL, customer);
  }

  getCustomers() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  deleteCustomer(accountnumber) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + accountnumber);
  }

  getCustomerByAccountNumber(accountnumber) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + accountnumber);
  }

  updateCustomer(customer, accountnumber) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + accountnumber, customer);
  }
}

export default new CustmomerService();
