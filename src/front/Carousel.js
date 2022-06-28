import React from 'react'

const Carousel = () => {
  return (
    <div id='info'>
      <div id="carouselControls" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2 className="info-text">What is Sorting ?</h2>
            <p className="info-def">Sorting is a process of ordering or placing a list of elements from a collection in some kind of order. It is nothing but storage of data in sorted order. Sorting can be done in ascending and descending order. It
              arranges the data in a
              sequence which makes searching easier.
            </p>

          </div>
          <div className="carousel-item">
            <h2 className="info-text">Bubble Sort</h2>
            <p className="info-def">
              Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for
              large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.
            </p>

          </div>
          <div className="carousel-item">
            <h2 className="info-text">Selection Sort</h2>
            <p className="info-def">
              Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts,
              the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2), where n is the number of items.
            </p>

          </div>
          <div className="carousel-item">
            <h2 className="info-text">Insertion Sort</h2>
            <p className="info-def">
            Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. 
            Values from the unsorted part are picked and placed at the correct position in the sorted part.it is not appropriate for large data sets as the time complexity of insertion sort 
            in the average case and worst case is O(n2), where n is the number of items.
            </p>

          </div>
          <div className="carousel-item">
            <h2 className="info-text">Quick Sort</h2>
            <p className="info-def">
            Like Merge Sort, QuickSort is a Divide and Conquer algorithm.Quicksort picks an element as pivot, and then it partitions the given array around the picked pivot element. In quick sort, a large array is divided into two arrays in which one holds values that are smaller than the specified value (Pivot),
            and another array holds the values that are greater than the pivot.the worst case time complexity of QuickSort is O(n2), where n is the number of items. 
            </p>

          </div>
          <div className="carousel-item">
            <h2 className="info-text">Merge Sort</h2>
            <p className="info-def">
            Merge sort is a sorting technique based on divide and conquer technique.it is one of the most respected algorithms. Merge sort first divides the array into equal halves and then combines them in a sorted manner.
            the worst-case time complexity being Ο(n log n), where n is the number of items.
            </p>

          </div>
          <div className="carousel-item">
            <h2 className="info-text">Heap Sort</h2>
            <p className="info-def">
            Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first 
            find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements.
            worst-case time complexity of O(n log n), where n is the number of items.
            </p>

          </div>





        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>

        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>

        </button>
      </div>
    </div>
  )
}

export default Carousel
