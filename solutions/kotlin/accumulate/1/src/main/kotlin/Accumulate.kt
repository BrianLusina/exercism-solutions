package com.kotlinapp.ktcollections.accumulate

object Accumulate {

    /**
     * Takes a list of objects and performs an operation on each object and
     * returns the object
     * @param input list of objects
     * @param fn function/operation to perform
     * @return [List] of objects with the operation performed on each of them
     * */
    fun <T, R> accumulate(input : List<T>, fn: (T) -> R) : List<R> = input.map { fn.invoke(it) }
}