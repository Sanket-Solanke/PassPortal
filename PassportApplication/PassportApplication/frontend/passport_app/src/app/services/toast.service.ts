import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  showError(title: string) {
    Swal.fire({
      toast: true,
      position: 'bottom-right', // Position at the bottom right
      icon: 'error',
      title: title,
      showConfirmButton: false,
      timer: 2000, // Timer for visibility
      timerProgressBar: true,
      background: "rgba(231, 76, 60, 0.8)", // Semi-transparent red background
      color: "#ffffff", // White text
      customClass: {
        container: 'toast-container',
        popup: 'toast-popup'
      }
    });
  }

  showSuccess(title: string) {
    Swal.fire({
      toast: true,
      position: 'bottom-right', // Position at the bottom right
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 2000, // Timer for visibility
      timerProgressBar: true,
      background: "rgba(46, 204, 113, 0.8)", // Semi-transparent green background
      color: "#ffffff", // White text
      customClass: {
        container: 'toast-container',
        popup: 'toast-popup'
      }
    });
  }

  showWarning(title: string) {
    Swal.fire({
      toast: true,
      position: 'bottom-right', // Position at the bottom right
      icon: 'warning',
      title: title,
      showConfirmButton: false,
      timer: 2000, // Timer for visibility
      timerProgressBar: true,
      background: "rgba(243, 156, 18, 0.8)", // Semi-transparent yellow background
      color: "#ffffff", // White text
      customClass: {
        container: 'toast-container',
        popup: 'toast-popup'
      }
    });
  }

  showInfo(title: string) {
    Swal.fire({
      toast: true,
      position: 'bottom-right', // Position at the bottom right
      icon: 'info',
      title: title,
      showConfirmButton: false,
      timer: 2000, // Timer for visibility
      timerProgressBar: true,
      background: "rgba(52, 152, 219, 0.8)", // Semi-transparent blue background
      color: "#ffffff", // White text
      customClass: {
        container: 'toast-container',
        popup: 'toast-popup'
      }
    });
  }
}
